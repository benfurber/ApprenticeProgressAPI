module UserHelpers
  def create_user
    user = build(:user)
    user.password = "verySECURE1234"
    user.save

    User.last
  end
end

RSpec.configure do |config|
  config.include UserHelpers
end
