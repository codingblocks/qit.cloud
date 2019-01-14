class PlaylistItem < ApplicationRecord
  belongs_to :playlist
  belongs_to :episode
end
