class CreateEpisodes < ActiveRecord::Migration[5.2]
  def change
    create_table :episodes do |t|
      t.string '@search.score'
      t.string :podcastTitle
      t.string :episodeTitle
      t.text :description
      t.string :published
      t.string :audioUrl
      t.string :episode
      t.string :season
      t.string :episodeType

      t.timestamps
    end
  end
end
