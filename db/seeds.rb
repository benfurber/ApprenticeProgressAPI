require "./db/data"

def create_a_user
  new_user = User.new
  new_user.email = ENV["SEED_USER_EMAIL"]
  new_user.password = ENV["SEED_USER_PASSWORD"]
  new_user.save!
  User.last
end

user = create_a_user

puts "User added"

local_goals = SeedData::GOALS

local_goals.each do |goal|
  goal_in_db = Goal.new
  goal_in_db.id = goal[:id]
  goal_in_db.actions = goal[:actions]
  goal_in_db.description = goal[:description]
  goal_in_db.evidence = goal[:evidence]
  goal_in_db.score = goal[:score]
  goal_in_db.tag = goal[:tag]
  goal_in_db.title = goal[:title]

  goal_in_db.user = user

  goal_in_db.save!
end

puts "Goals added"
