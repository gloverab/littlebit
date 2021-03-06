class OrganizationsController < ApplicationController
  skip_before_action :authenticate, only: [:create]
  before_action :set_organization, only: [:show, :update, :destroy]

  def index
    @organizations = Organization.all
    json_response(@organizations)
  end

  def create
    @organization = Organization.new(organization_params)
    @organization.owner = current_user
    if @organization.save
      json_response(@organization)
    else
      json_response(params)
    end
  end

  def show
    json_response(@organization)
  end


  private

  def organization_params
    params.require(:organization).permit(:name, :ein, :firstName, :lastName, :email, :city, :state, :walletAddress)
  end

  def set_organization
    @organization = Organization.find(params[:id])
  end

end
