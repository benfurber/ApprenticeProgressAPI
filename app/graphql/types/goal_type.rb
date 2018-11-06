module Types
  class GoalType < GraphQL::Schema::Object
    description "A goal"

    field :id, ID, null: false
    field :actions, [String], null: true
    field :description, String, null: true
    field :evidence, String, null: true
    field :score, Float, null: false
    field :tag, String, null: true
    field :title, String, null: false
  end
end
