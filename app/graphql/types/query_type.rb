module Types
  class QueryType < Types::BaseObject
    field :goals, [GoalType], null: true do
      description "Goals data"
    end
    def goals
      Goal.all
    end
  end
end
