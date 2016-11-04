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
