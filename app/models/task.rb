# == Schema Information
#
# Table name: tasks
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  list_id    :integer          not null
#  name       :string           not null
#  completed  :boolean          default(FALSE)
#  start_date :date
#  due_date   :date
#  priority   :integer
#  estimate   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Task < ActiveRecord::Base
  validates :user_id, :list_id, :name, presence: true
  belongs_to(:user)
  belongs_to(:list)
end
