import axios from 'axios';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserSearch } from './UserSearch';

jest.mock('axios');
const mockAxios = jest.mocked(axios);

const user = userEvent.setup();

describe('UserSearch', () => {
  beforeEach(() => {
    mockAxios.get.mockReset();
  });

  it('入力したテキストでAPIリクエストが送信される', async () => {
    // mock
    const userInfo = {
      id: 1,
      name: 'Taro',
    };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    // render
    render(<UserSearch />);

    // event
    const input = screen.getByRole('textbox');
    await user.type(input, userInfo.name);
    const button = screen.getByRole('button');
    await user.click(button);

    // assertion
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/api/users?query=${userInfo.name}`
    );
  });

  it('APIから取得したユーザー情報が画面に表示される', async () => {
    // mock
    const userInfo = {
      id: 1,
      name: 'Taro',
    };
    const response = { data: userInfo };
    mockAxios.get.mockResolvedValue(response);

    // render
    render(<UserSearch />);

    // event
    const input = screen.getByRole('textbox');
    await user.type(input, userInfo.name);
    const button = screen.getByRole('button');
    await user.click(button);

    // assertion
    await waitFor(() => {
      expect(screen.getByText(userInfo.name)).toBeInTheDocument();
    });
  });
});
