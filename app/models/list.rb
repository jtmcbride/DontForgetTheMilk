class List < ActiveRecord::Base

  validates(
    :title, 
    uniqueness: { 
      scope: :user_id,
      message: "you already have a list with that title"
      }
  )

  belongs_to(:user)

end
