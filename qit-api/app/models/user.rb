class User < ApplicationRecord
  has_secure_password
  has_many :queue_items
  has_many :episodes, through: :queue_items
  has_many :playlists
end
