import { http, HttpResponse } from "msw";
import { UserResponseSchema } from "../../";

const mockUserData = {
  data: {
    id: "5e800be0-088e-41cb-b549-10ebf4a13591",
    role: "roomer",
    name: "Полный Тестовый Пользователь",
    nickname: "user6",
    avatar_url: "https://example.com/avatar_publicuser.png",
    age: 32,
    city: {
      id: "1",
      name: "Кореновск",
    },
    is_private: false,
    telegram: "publicuser_telegram",
    about: "Публичный информационный тестовый пользователь",
    points: 10,
    calling_limit: 10,
    going_limit: 10,
    account_status: "active",
    last_login_at: "2025-07-22T13:33:29.091877Z",
    created_at: "2025-07-22T13:33:29.091877Z",
    updated_at: "2025-07-22T13:33:29.149374Z",
    description: `Я профессиональный скуф, обажаю сидеть дома и часто играю в Мафию с
            друзьями по вечера в Сицилии и зовем всех желающ и разные другие
            дела...`,
  },
};

const validatedMockData = UserResponseSchema.parse(mockUserData);

export const userHandlers = [
  http.get("*/profile/:id", ({ params }) => {
    const { id } = params;
    console.log("MSW: Intercepted profile request for ID:", id);

    if (id === validatedMockData.data.id) {
      return HttpResponse.json(validatedMockData);
    }

    return HttpResponse.json({ error: "User not found" }, { status: 404 });
  }),
];
