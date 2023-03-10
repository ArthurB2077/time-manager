defmodule Api.Repo.Migrations.AddTeamMemberTable do
  use Ecto.Migration

  def change do
    create table(:team_member) do
      add :team, references(:teams, on_delete: :delete_all)
      add :user, references(:users, on_delete: :delete_all)

    end
    create index(:team_member, [:team, :user])
  end
end
