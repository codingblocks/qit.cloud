Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      get '/user', to: 'users#show'
      post '/signin', to: 'users#signin'
      post '/signup', to: 'users#signup'
      post '/queue_episode', to: 'users#queue_episode'
      post '/unqueue_episode', to: 'users#unqueue_episode'
    end
  end
end
