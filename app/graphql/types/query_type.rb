module Types
  class QueryType < Types::BaseObject
    field :goals, [GoalType], null: true do
      description "Goals data"
    end
    def goals
      Goal.all
    end

    field :users, [UserType], null: true do
      description "Users"
    end
    def users
      User.all
    end
  end
end
