require "rails_helper"

RSpec.describe Goal, type: :model do
  it "Can create a goal" do
    goal = create(:goal, user: create_user)

    expected = Goal.last.actions

    expect(goal.actions).to eq(expected)
  end
end
