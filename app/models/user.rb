class User < ApplicationRecord
  has_secure_password
  has_many :organizations, foreign_key: "owner_id"
end
