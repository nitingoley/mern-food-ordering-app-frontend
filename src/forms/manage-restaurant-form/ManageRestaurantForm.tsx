import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  restaurantName: z.string().min(1, "Restaurant name is required"),
  city: z.string().min(1, "City name is required"),
  country: z.string().min(1, "Country name is required"),
  deliveryPrice: z.coerce.number().min(0, "Must be a valid number"),
  estimatedDeliveryTime: z.coerce.number().min(1, "Must be a valid number"),
  cuisines: z.array(z.string()).nonempty("Please select at least one item"),
  menuItem: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image is required" }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItem: [{ name: "", price: 0 }],
    },
  });

  const onSubmit = (data: RestaurantFormData) => {
    const formData = new FormData();

    formData.append("restaurantName", data.restaurantName);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("deliveryPrice", (data.deliveryPrice * 100).toString());
    formData.append("estimatedDeliveryTime", data.estimatedDeliveryTime.toString());

    data.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });

    data.menuItem.forEach((menu, index) => {
      formData.append(`menuItem[${index}][name]`, menu.name);
      formData.append(`menuItem[${index}][price]`, (menu.price * 100).toString());
    });

    formData.append("imageFile", data.imageFile);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Submit</Button>}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
