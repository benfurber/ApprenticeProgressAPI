module Types
  class GoalType < GraphQL::Schema::Object
    description "A goal"

    field :id, ID, null: false
    field :title, String, null: false
  end
end
