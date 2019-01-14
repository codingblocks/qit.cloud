class Episode < ApplicationRecord
  has_many :queue_items
  has_many :users, through: :queue_items

  has_many :playlist_items
  has_many :playlists, through: :playlist_items
end
