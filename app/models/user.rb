class User < ActiveRecord::Base

  validates :username, :password_digest, :session_token, :email, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, uniqueness: true
  before_validation(:ensure_token)

  attr_reader :password

  def self.find_by_creds(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_token
    unless self.session_token
      self.session_token = SecureRandom.urlsafe_base64
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
  end

end
