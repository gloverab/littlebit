class AddOwnerToOrganizations < ActiveRecord::Migration[5.0]
  def change
    add_column :organizations, :owner_id, :integer
  end
end
