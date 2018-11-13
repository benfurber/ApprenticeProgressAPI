module Types
  class UserType < GraphQL::Schema::Object
    description "A user"

    field :authentication_token, String, null: true
    field :id, ID, null: true
    field :email, String, null: true
    field :password, String, null: true
  end
end
