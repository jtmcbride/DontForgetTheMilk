# == Schema Information
#
# Table name: lists
#
#  id         :integer          not null, primary key
#  title      :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class List < ActiveRecord::Base

  validates(
    :title,
    presence: true,
    uniqueness: { 
      scope: :user_id,
      message: "you already have a list with that title"
      }
  )

  belongs_to(:user)
  has_many(:tasks, dependent: :destroy)


  def self.user_lists_with_task_count(user)
    self.find_by_sql(<<-SQL)
    SELECT 
      lists.*, count(tasks.*) 
    AS 
      count 
    FROM
      lists 
    INNER JOIN 
      tasks
    ON 
      tasks.list_id = lists.id 
    WHERE 
      lists.user_id = #{user.id} AND tasks.completed = false
    GROUP BY 
      lists.id
    SQL
  end
end
