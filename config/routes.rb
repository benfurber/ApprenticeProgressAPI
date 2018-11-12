Rails.application.routes.draw do
  devise_for :users
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
end
