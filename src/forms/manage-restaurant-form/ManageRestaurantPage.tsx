import { useCreatMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "./ManageRestaurantForm";

export default function ManageRestaurantPage() {
  const { createRestuant, isLoading } = useCreatMyRestaurant();
  return <ManageRestaurantForm onSave={createRestuant} isLoading={isLoading} />;
}
