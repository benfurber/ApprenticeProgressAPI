require "rails_helper"

describe "login_user_mutation", type: :graphql do
  it "provides a token when sucessfully logging in" do
    user = create_user

    query = <<~QUERY
      mutation {
        loginUser(email: "#{user.email}", password: "verySECURE1234") {
          user {
            id
            authenticationToken
          }
        }
      }
    QUERY

    result = execute(query)

    auth_token = result[:data][:loginUser][:user][:authenticationToken]
    auth_token_structure = /.{20}/

    expected = auth_token.match(auth_token_structure)

    expect(expected[0]).to eq(auth_token)
  end

  it "returns nil when incorrect data is provided" do
    query = <<~QUERY
      mutation {
        loginUser(email: "wrong@email.com", password: "708425790") {
          user {
            id
            authenticationToken
          }
        }
      }
    QUERY

    result = execute(query)

    expected = result[:data][:loginUser]

    expect(expected).to eq(nil)
  end
end
