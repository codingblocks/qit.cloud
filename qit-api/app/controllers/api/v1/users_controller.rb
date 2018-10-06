class Api::V1::UsersController < ApplicationController
  def show
    user = signedin_user
      if user
        render json: user
      else
        render json: {error: 'You are not signed in.'}
      end
  end

  def signin
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      render json: {user: render_user(user), token: issue_token({id: user.id})}
    else
      render json: {error: 'Invalid username/password.'}, status: 400
    end
  end

  def signup
    user = User.new(username: params[:username], password: params[:password])
    if user.save
      render json: user
    else
      render json: {error: 'Unable to create user.'}, status: 400
    end
  end

  def queue_episode
    user = signedin_user
    if user
      episode = Episode.where(episode_params).first_or_create
      QueueItem.create(episode: episode, user: user)
      render json: {message: 'Episode added to queue.'}
    else
      render json: {error: 'User not found.'}, status: :unauthorized
    end
  end

  def unqueue_episode
    user = signedin_user
    if user
      queue_item = user.queue_items.find_by(episode_id: params[:id])
      if queue_item
        queue_item.destroy
        render json: {message: 'Episode removed from queue.'}
      else
        render json: {error: "Episode not in user's queue."}, status: 404
      end
    else
      render json: {error: 'User not found.'}, status: 400
    end
  end

  private
  def episode_params
    params.require(:episode).permit(:podcastTitle, :episodeTitle, :description, :published, :audioUrl, :episode)
  end

  def render_user(user)
    { username: user.username, episodes: user.episodes, playlists: user.playlists }
  end
end