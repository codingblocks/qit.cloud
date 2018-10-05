class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :episodes, :playlists
  has_many :playlists
  has_many :episodes, through: :queue_items

  class PlaylistSerializer < ActiveModel::Serializer
    attributes :id, :name, :episodes
    has_many :episodes, through: :playlist_items
  end

end
