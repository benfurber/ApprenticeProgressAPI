require "rails_helper"

describe "Goals query", type: :graphql do
  it "can execute a goals query" do
    goal = create(:goal)
    query = <<~QUERY
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

    result = execute(query)

    expected = {
      goals: [
        {
          actions: goal.actions,
          description: goal.description,
          evidence: goal.evidence,
          id: goal.id.to_s,
          score: goal.score,
          tag: goal.tag,
          title: goal.title,
        },
      ],
    }

    expect(result[:data]).to eq(expected)
  end
end
