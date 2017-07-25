class AddUpvotesToOrganizations < ActiveRecord::Migration[5.0]
  def change
    add_column :organizations, :upvotes, :integer
  end
end
