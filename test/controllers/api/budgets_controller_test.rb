require 'test_helper'

class Api::BudgetsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_budgets_index_url
    assert_response :success
  end

  test "should get show" do
    get api_budgets_show_url
    assert_response :success
  end

  test "should get new" do
    get api_budgets_new_url
    assert_response :success
  end

  test "should get edit" do
    get api_budgets_edit_url
    assert_response :success
  end

end
