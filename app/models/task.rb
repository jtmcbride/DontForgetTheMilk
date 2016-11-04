class Task < ActiveRecord::Base
  validates :user_id, :list_id, :name, presence: true
  belongs_to(:user)
  belongs_to(:list)
end
