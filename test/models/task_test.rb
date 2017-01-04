# == Schema Information
#
# Table name: tasks
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  list_id        :integer          not null
#  name           :string           not null
#  completed      :boolean          default(FALSE)
#  start_date     :date
#  due_date       :date
#  date_completed :datetime
#  priority       :integer          default(99)
#  estimate       :integer          default(0)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
