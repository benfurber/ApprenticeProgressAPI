require "./db/data"

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

  goal_in_db.save!
end

puts "Goals added"
