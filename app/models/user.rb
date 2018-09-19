class User < ApplicationRecord
  validates :password_digest, :session_token, :email, :fname, :lname, presence: true
  validates :password, length: { minimum: 7, allow_nil: true}
  validates :email, uniqueness:true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :runs,
    foreign_key: :runner_id,
    primary_key: :id,
    class_name: :Run

  has_many :friendees,
    foreign_key: :friendee_id,
    class_name: :Friend

  has_many :frienders,
    foreign_key: :friender_id,
    class_name: :Friend

  has_many :workouts,
    foreign_key: :user_id,
    class_name: :Workout


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.generate_session_token
    token = SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
