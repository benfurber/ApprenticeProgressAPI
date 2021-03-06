FactoryBot.define do
  factory :user do
    email { "fred@testing.com" }
  end
  factory :goal do
    id { 1 }
    actions { ["First action", "Second action"] }
    description { "A description" }
    evidence { ["Did a thing", "Did a second thing"] }
    score { 4 }
    tag { "Team thoughtbot" }
    title { "Test title" }
  end
end
