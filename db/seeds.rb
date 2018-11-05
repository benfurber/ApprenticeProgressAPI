# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "./db/data"

local_goals = SeedData::GOALS

local_goals.each do |goal|
  goal_in_db = Goal.new()
  goal_in_db.id = goal[:id]
  goal_in_db.actions = goal[:actions]
  goal_in_db.description = goal[:description]
  goal_in_db.evidence = goal[:evidence]
  goal_in_db.score = goal[:score]
  goal_in_db.tag = goal[:tag]
  goal_in_db.title = goal[:title]

  goal_in_db.save
end

puts "Goals added"
