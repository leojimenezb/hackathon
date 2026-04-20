package mx.com.santander.splitter.ml.recomendations.demo.mapper;

public class MccCategoryMapper {

    public enum Category {
        PETS,
        VETERINARY,
        GAS,
        RESTAURANTS,
        GROCERIES,
        OTHER
    }

    public static Category fromMcc(String mcc) {
        if (mcc == null) return Category.OTHER;
        return switch (mcc) {
            case "5995" -> Category.PETS;         // Pet shops
            case "742"  -> Category.VETERINARY;   // Veterinary services
            case "5541" -> Category.GAS;          // Gas stations
            case "5812" -> Category.RESTAURANTS;  // Restaurants
            case "5411" -> Category.GROCERIES;    // Supermarkets
            default -> Category.OTHER;
        };
    }
}
