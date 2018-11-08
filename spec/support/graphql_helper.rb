module GraphQLHelpers
  def execute(query)
    ApprenticeProgressAPISchema.execute(query).to_h.deep_symbolize_keys
  end
end

RSpec.configure do |config|
  config.include GraphQLHelpers, type: :graphql
end
