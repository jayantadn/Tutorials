#ifndef	_CPP_VISITOR_FISH_HPP_
#define _CPP_VISITOR_FISH_HPP_


class Fish : public Ingredient {

	public: explicit Fish( float amount = 1.0f ) :
		Ingredient( amount ) {
	}
	public: void accept( Visitor* visitor ) { assert( visitor );
		return visitor->visit( this );
	}
	public: float getCalories() const {
		return 189.0f;
	};
	public: float getCarbs() const {
		return 0.0f;
	};
	public: float getProtien() const {
		return 41.0f;
	}
	public: float getFat() const {
		return 2.0f;
	}
	public: float getCholesterol() const {
		return 0.99f;
	}
	public: float getSodium() const {
		return 0.125f;
	}
	public: bool isVegetarian() const {
		return true;
	}
	public: std::string toString() const {
		std::stringstream result;
		result << "Fish(" << _amount << ")";
		return result.str();
	}
};

#endif