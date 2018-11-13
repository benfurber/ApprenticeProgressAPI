module Mutations
  class LoginUser < Mutations::BaseMutation
    null true

    argument :email, String, required: true
    argument :password, String, required: true

    field :user, Types::UserType, null: true

    def resolve(email:, password:)
      return unless email && password

      user = User.find_by(email: email)
      return unless user
      return unless user.valid_password?(password)

      OpenStruct.new(
        token: user.reset_authentication_token,
        user: user,
      )
    end
  end
end
