class CreateOrganizations < ActiveRecord::Migration[5.0]
  def change
    create_table :organizations do |t|
      t.string :name
      t.integer :ein
      t.string :firstName
      t.string :lastName
      t.string :walletAddress
      t.string :city
      t.string :state
      t.string :email

      t.timestamps
    end
  end
end
