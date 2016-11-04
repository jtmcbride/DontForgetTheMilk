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
  has_many(:tasks)

end
