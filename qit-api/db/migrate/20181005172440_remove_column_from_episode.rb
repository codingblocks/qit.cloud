class RemoveColumnFromEpisode < ActiveRecord::Migration[5.2]
  def change
    remove_column :episodes, :episodeType, :string
    remove_column :episodes, :season, :string
    remove_column :episodes, '@search.score', :string
  end
end
