require "rails_helper"

RSpec.describe User, type: :model do
  it "Can create a user" do
    user = build(:user)
    user.password = "verySECURE1234"
    user.save

    expected = User.last.email

    expect(user.email).to eq(expected)
  end
end
