# == Schema Information
#
# Table name: subtasks
#
#  id         :integer          not null, primary key
#  task_id    :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subtask < ActiveRecord::Base
  belongs_to(:task)
  
end
