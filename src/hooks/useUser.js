import { api, setAuthToken } from "@/libs/api";
import { useUserStore } from "@/stores/useUserStore";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

export const useUser = () => {
  const router = useRouter();
  const { token, setUser, setToken } = useUserStore();

  useQuery({
    enabled: !!token,
    queryKey: ["get-user-info", token],
    queryFn: async () => {
      const response = await api.get("/auth/check");
      const user = response.data;

      setUser(user);
    },
  });

  React.useEffect(() => {
    const localToken = localStorage.getItem("token");

    setToken(localToken);
    setAuthToken(localToken);

    if (!localToken) {
      router.push("/login");
    }
  }, []);
};
