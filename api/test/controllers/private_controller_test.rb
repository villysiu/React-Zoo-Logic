require "test_helper"

class PrivateControllerTest < ActionDispatch::IntegrationTest
  test "should get getCurrUser" do
    get private_getCurrUser_url
    assert_response :success
  end
end
