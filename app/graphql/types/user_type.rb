module Types
  class UserType < GraphQL::Schema::Object
    description "A user"

    field :email, String, null: true
    field :password, String, null: true
  end
end
