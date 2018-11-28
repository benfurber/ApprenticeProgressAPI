require "rails_helper"

describe "graphql", type: :feature do
  it "user can sign up, login and view goals" do
    user_email = "ben@featuretesting.com"
    user_password = "password1"

    sign_up_mutation = <<~QUERY
      mutation {
        createUser(email: "#{user_email}", password: "#{user_password}") {
          user {
            email
          }
        }
      }
    QUERY

    ApprenticeProgressAPISchema.execute(sign_up_mutation)

    Goal.create(
      actions: ["First action", "Second action"],
      description: "A description",
      evidence: ["Did a thing", "Did a second thing"],
      score: 4,
      tag: "Team thoughtbot",
      title: "Test title",
      user: User.first,
    )

    get_goals_query = <<~QUERY
      {
        goals {
          id
          actions
          description
          evidence
          score
          tag
          title
        }
      }
    QUERY

    results = ApprenticeProgressAPISchema.execute(get_goals_query).to_h.deep_symbolize_keys

    expected = {
      goals: [
        {
          id: Goal.last.id.to_s,
          actions: Goal.last.actions,
          description: Goal.last.description,
          evidence: Goal.last.evidence,
          score: Goal.last.score,
          tag: Goal.last.tag,
          title: Goal.last.title,
        },
      ],
    }

    expect(results[:data]).to eq(expected)
  end
end
