class Playlist < ApplicationRecord
  belongs_to :user
  has_many :playlist_items
  has_many :episodes, through: :playlist_items
end
