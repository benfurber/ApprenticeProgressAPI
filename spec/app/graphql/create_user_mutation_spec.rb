require "rails_helper"

describe "create_user_mutation", type: :graphql do
  it "can create a user" do
    query = <<~QUERY
      mutation {
        createUser(email: "test@boring.com", password: "S3CUrE!") {
          user {
            email
          }
        }
      }
    QUERY

    result = execute(query)

    expected = {
      createUser: {
        user: {
          email: "test@boring.com",
        },
      },
    }

    expect(result[:data]).to eq(expected)
  end

  it "returns nil if a password is not provided", type: :graphql do
    query = <<~QUERY
      mutation {
        createUser(email: "test2@boring.com", password: "") {
          user {
            email
          }
        }
      }
    QUERY

    result = execute(query)

    expected = {
      createUser: {
        user: nil,
      },
    }

    expect(result[:data]).to eq(expected)
  end
end
